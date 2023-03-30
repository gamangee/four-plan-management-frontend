import React from 'react';
import ChangeRole from '../../components/ChangeRole';

export default function Management() {
  const id = 1;
  const role = 'ROLE_USER';
  return (
    <div>
      Management
      <ChangeRole role={role} id={id} />
    </div>
  );
}
