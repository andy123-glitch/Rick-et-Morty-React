import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, isFirebaseConfigured } from '../firebase-config';

export default function Inscription() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');

        if (!auth) {
            setMessage("L'inscription est indisponible sans configuration Firebase.");
            return;
        }

        setIsSubmitting(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage('Compte créé avec succès.');
            setEmail('');
            setPassword('');
        } catch (error) {
            setMessage(`Échec de l'inscription : ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="p-3">
            {!isFirebaseConfigured && (
                <Alert variant="warning">
                    La configuration Firebase est absente. La navigation reste disponible,
                    mais l'inscription est désactivée.
                </Alert>
            )}
            <Form.Group className="mb-3" controlId="registrationEmail">
                <Form.Label>Adresse e-mail</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Adresse e-mail"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registrationPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </Form.Group>
            {message && <p aria-live="polite">{message}</p>}
            <Button variant="primary" type="submit" disabled={!auth || isSubmitting}>
                {isSubmitting ? 'Création…' : "S'inscrire"}
            </Button>
            <Button href="/" className="m-2" variant="secondary">
                Retour
            </Button>
        </Form>
    );
}
