const Ninjas = ({ ninjas, deleteNinja }) => {
  // const { ninjas } = props;
  // // console.log(props);
  // const ninjaList = ninjas.map((ninja) => {
  //   if (ninja.age >= 25) {
  //     return (
  //       <div key={ninja.id} className="ninja">
  //         <div>Name: {ninja.name}</div>
  //         <div>Age: {ninja.age}</div>
  //         <div>Belt: {ninja.belt}</div>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // });
  // const ninjaList = ninjas.map((ninja) => {
  //   return ninja.age > 20 ? (
  //     <div key={ninja.id} className="ninja">
  //       <div>Name: {ninja.name}</div>
  //       <div>Age: {ninja.age}</div>
  //       <div>Belt: {ninja.belt}</div>
  //     </div>
  //   ) : null;
  // });
  return (
    <div className="ninja-list">
      {ninjas.map((ninja) => {
        return ninja.age > 20 ? (
          <div key={ninja.id} className="ninja">
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>

            <button onClick={() => deleteNinja(ninja.id)}>Delete ninja</button>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ninjas;
