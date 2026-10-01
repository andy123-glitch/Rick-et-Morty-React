import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Accueil from '../route/Accueil';
import Connexion from '../route/Connexion';
import Inscription from '../route/Inscription';
import reducer from '../redux/reducer/user';

jest.mock('../firebase-config', () => ({
    auth: null,
    isFirebaseConfigured: false,
}));

describe('Firebase configuration fallback', () => {
    it('keeps the login page usable when Firebase is not configured', () => {
        render(<Connexion />);

        expect(screen.getByText(/configuration Firebase est absente/i)).toBeTruthy();
        expect(screen.getByRole('button', { name: /se connecter/i }).disabled).toBe(true);
    });

    it('keeps the registration page usable when Firebase is not configured', () => {
        render(<Inscription />);

        expect(screen.getByText(/configuration Firebase est absente/i)).toBeTruthy();
        expect(screen.getByRole('button', { name: /s'inscrire/i }).disabled).toBe(true);
    });
});

describe('public character browsing', () => {
    it('renders the characters returned by the API', async () => {
        const originalFetch = global.fetch;
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: async () => ({
                id: 1,
                name: 'Rick Sanchez',
                image: 'https://example.test/rick.png',
            }),
        });

        try {
            render(
                <Provider store={createStore(reducer)}>
                    <Accueil />
                </Provider>
            );

            await waitFor(() => {
                expect(screen.getAllByText('Rick Sanchez')).toHaveLength(5);
            });
            expect(global.fetch).toHaveBeenCalledTimes(5);
        } finally {
            global.fetch = originalFetch;
        }
    });
});
