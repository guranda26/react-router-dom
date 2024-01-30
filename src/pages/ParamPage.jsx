import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    fact: "Sirius Black Never Knew About His Brother's Heroic Sacrifice",
  },
  {
    id: 2,
    fact: `Harry Potter Wasn’t the Only One Who Could See Dementors`,
  },
  {
    id: 3,
    fact: "The Marauders Were Not All There for Sirius",
  },
  {
    id: 4,
    fact: "All of the Marauders Died for Harry Potter",
  },
];

const ParamPage = () => {
  const param = useParams();

  const selectedFact = data.find(
    (selectedFact) => selectedFact.id === parseInt(param.id)
  );
  if (!selectedFact) {
    return <h1>No fact found for this ID.</h1>;
  }

  return (
    <div className="param">
      <h2>Fact N{selectedFact.id} </h2>
      <h3>{selectedFact.fact}</h3>
    </div>
  );
};

export default ParamPage;
