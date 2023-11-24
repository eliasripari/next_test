import { useState, useEffect } from "react";
import { getRecipes } from "../data/getData";

function RecipeForm({ allRecipes, recipe }) {
  // Variabile di stato che conterrà la ricetta da inviare
  const [newRecipe, setNewRecipe] = useState({
    idRecipe: 0, // mando comunque l'id, solo per assegnarlo alle istruzioni
    name: "",
    imageUrl: "",
    description: "",
    steps: [""],
  });

  // Al caricamento della pagina, verifico se è un edit o un nuovo inserimento
  useEffect(() => {
    if (recipe) {
      setNewRecipe({
        idRecipe: recipe.id || 0,
        name: recipe.titolo || "",
        imageUrl: recipe.imageUrl || "",
        description: recipe.preparazione || "",
        steps: recipe.steps || [""],
      });
    }
  }, [recipe]);

  // Gestione modifica ricetta
  const handleStepChange = (index, value) => {
    const updatedSteps = [...newRecipe.steps];
    updatedSteps[index] = value;
    setNewRecipe({ ...newRecipe, steps: updatedSteps });
  };

  // Aggiunge lo step alla ricetta
  const addStep = () => {
    setNewRecipe({ ...newRecipe, steps: [...newRecipe.steps, ""] });
  };

  // Rimuove uno step dalla ricetta
  const removeStep = (index) => {
    const filteredSteps = newRecipe.steps.filter((_, i) => i !== index);
    setNewRecipe({ ...newRecipe, steps: filteredSteps });
  };

  // Submit della ricetta
  async function handleSubmit(e) {
    e.preventDefault();
    const idRecipe = allRecipes.slice(-1)[0].id + 1; // Calcola l'ID qui

    const recipeToSubmit = {
      ...newRecipe,
      idRecipe, // Usa l'ID calcolato
    };

    // Controllo se è un edit o un nuovo inserimento con l'IF
    if (!recipe) {
      try {
        await fetch("/api/recipes", {
          method: "POST",
          body: JSON.stringify(recipeToSubmit),
        });
        setNewRecipe({
          name: "",
          imageUrl: "",
          description: "",
          steps: [""],
        });
        //setUpdateStudentList((prev) => !prev);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        await fetch("/api/recipes/" + recipe._id, {
          method: "PUT",
          body: JSON.stringify(recipeToSubmit),
        });
        setNewRecipe({
          name: "",
          imageUrl: "",
          description: "",
          steps: [""],
        });
        //setUpdateStudentList((prev) => !prev);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Nome Ricetta"
          value={newRecipe.name}
          onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL Immagine"
          value={newRecipe.imageUrl}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, imageUrl: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Descrizione Ricetta"
          value={newRecipe.description}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, description: e.target.value })
          }
        />

        {newRecipe.steps.map((step, index) => (
          <div key={index} className="flex gap-2 grid grid-cols-3">
            <input
              type="text"
              placeholder={`Passaggio ${index + 1}`}
              value={step}
              onChange={(e) => handleStepChange(index, e.target.value)}
              className="col-span-2"
            />
            <button
              type="button"
              onClick={() => removeStep(index)}
              className="button bg-[#FA7070] text-white col-span-1"
            >
              Rimuovi
            </button>
          </div>
        ))}

        <button type="button" className="bg-[#A6CF98]" onClick={addStep}>
          Aggiungi Passaggio
        </button>
        <button type="submit" className="bg-blue-400">
          Carica Ricetta
        </button>
      </form>
      <div className="mt-10">
        <p>Nome: {newRecipe.name}</p>
        <p>Descrizione: {newRecipe.description}</p>
        <p>Steps:</p>
        <ul>
          {newRecipe.steps.map(
            (step, index) =>
              step && (
                <li key={index}>
                  {index + 1}. {step}
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}

export default RecipeForm;
