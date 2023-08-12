import React from 'react';
import { useSession } from 'next-auth/react';

export default function DeleteUserDataButton() {
  const { data: session } = useSession();
  const userMail = session.user.email;
  const _id = session.user.email;
  async function handleDelete()  {
    try {
      const response = await fetch(`/api/savedInsulinDatas/savedInsulinDatas?userMail=${userMail}`, {
        method: 'DELETE',
      });
      await fetch('/api/insulinFactor/' + _id, {
             method: 'DELETE',
           });
           fetch('/api/correctionFactor/' + _id, {
             method: 'DELETE',})
      if (response.ok) {
        // Daten wurden erfolgreich gelöscht
        console.log('Daten wurden erfolgreich gelöscht.');
      } else {
        // Fehler beim Löschen der Daten
        console.error('Fehler beim Löschen der Daten.');
      }
    } catch (error) {
      console.error('Fehler beim Löschen der Daten:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete User Data</button>
  );
};

