import Link from "next/link";

function Recipes({ recipes, allCategories }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 py-5">
        {recipes.map((el) => (
          <div className="flex flex-col gap-2 items-start rounded justify-between">
            <div className="flex flex-col gap-2 border border-black rounded">
              <h4 className="mt-2 ml-2 bg-[#5F6F52] px-3 py-1 rounded-full self-start text-white absolute text-xs">
                {allCategories &&
                  allCategories
                    .filter((cat) => el.id_categoria === cat.id_categoria)
                    .map((cat) => cat.nome_categoria)}
              </h4>
              <img
                src={el.url_immagine}
                alt=""
                className="aspect-square object-cover rounded rounded-b-none"
              />
              <div className="p-3 flex flex-col gap-1">
                <h3 className="text-xl font-bold pb-2 border-b border-black">
                  {el.titolo}
                </h3>

                <p className="text-s">
                  {el.preparazione.slice(0, 140) + "..."}
                </p>
              </div>
              <Link href={`recipes/${el.id}`}>
                <button className="p-1 px-2 font-normal w-full rounded-b rounded-t-none p-3 border-t border-black text-black">
                  Leggi la ricetta
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Recipes;
