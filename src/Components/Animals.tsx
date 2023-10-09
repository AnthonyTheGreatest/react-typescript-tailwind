import { Animal } from "./Animal.types"

type AnimalsProps = {
    animals: Animal[]
};

const Animals = (props: AnimalsProps) => {
  return (
    <div>
        {props.animals.map(animal => (
            <p key={animal.name} >A {animal.species} named {animal.name}</p>
        ))}
    </div>
  );
};

export default Animals;
