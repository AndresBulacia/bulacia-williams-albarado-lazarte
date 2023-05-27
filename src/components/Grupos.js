import React from 'react';
const Grupos = () => {
  const grupos = [
    {
      id: 1,
      nombre: 'Grupo A',
      alumnos: [
        { id: 1 , nombre: 'Bentancur'},
        { id: 2 , nombre: 'Spector'},
        {id:  3, nombre: 'Lazarte'},
        { id: 4, nombre: 'Laura' },
        { id: 5, nombre: 'Rey' },
        { id: 6, nombre: 'Portillo' },
        {id:  7, nombre: 'Santillan'},
        { id: 8, nombre: 'Fresia' },
        { id: 9, nombre: 'Albarado' },
        { id: 10, nombre: 'Cassiel' },
        { id: 11, nombre: 'Castillo' },
        { id: 12 , nombre: 'Urcan'},
        { id: 13, nombre: 'Bulacia' },
        { id: 14 , nombre: 'Olmos'},
        { id: 15 , nombre: 'Quinteros'},
        { id: 16 , nombre: 'Lujan'},
        { id: 17 , nombre: 'Blanca'},
        { id: 18 , nombre: 'Flores'},
        { id: 19 , nombre: 'Porro'},
        { id: 20, nombre: 'Williams' }
      ],
      miembrosGrupo :[20,13,3,9]
    }
  ];

  return (
    <div>
      <h2>GRUPO 1</h2>
      {grupos.map((grupo) => (
          <ul className='ul-grupos'>          
            {grupo.alumnos.map((alumno) => {
              if (grupo.miembrosGrupo.includes(alumno.id)) {
                return <h4 className='h4-grupos'>
                            <li key={alumno.id}>
                                {alumno.nombre}<div className='check-grupo'><input type="checkbox" checked={grupos}/></div>
                            </li>
                        </h4>;

              } else {
                return <h4 className='h4-grupos'>
                            <li key={alumno.id}>
                                {alumno.nombre}
                                <div className='check-grupo'><input type="checkbox" checked={false}/></div>
                            </li>
                        </h4>;
              }
            })}
          </ul>
      ))}
    </div>
  );
};

export default Grupos;