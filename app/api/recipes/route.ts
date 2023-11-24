import { NextRequest, NextResponse } from "next/server";
import db from "@/app/data/db";

// RICHIAMA RICETTA
export async function GET(
  Request: NextRequest,
  Resposne: NextResponse
): Response {
  try {
    const [rows] = await db.query("SELECT * FROM recipes");
    return new Response(JSON.stringify(rows));
  } catch (error) {
    return new Response(JSON.stringify({ error: true }));
  }
}

// INSERISCI RICETTA
export async function POST(Request: NextRequest, Response: NextResponse) {
  const body = await Request.json();
  const recipe = {
    id: body.idRecipe,
    titolo: body.name,
    id_categoria: 1,
    preparazione: body.description,
    imageUrl: body.imageUrl,
    steps: body.steps,
  };

  try {
    await db.query(
      "INSERT INTO recipes (titolo, id_categoria, preparazione, url_immagine) VALUES (?, ?, ?, ?)",
      [recipe.titolo, recipe.id_categoria, recipe.preparazione, recipe.imageUrl]
    );

    await db.query(
      "INSERT INTO preparazione (istruzioni, id_recipe) VALUES (?, ?)",
      ["prova1, prova2", recipe.id]
    );

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: true }), { status: 500 });
  }
}

// CANCELLA RICETTA
export async function DELETE(Request: NextRequest, Response: NextResponse) {
  const id = response.params.id;

  try {
    await db.query("DELETE FROM recipes WHERE id = ?", [id]);
  } catch (error) {
    return new Response(JSON.stringify({ error: true }));
  }
}

// AGGIORNA RICETTA
export async function PATCH(request: NextRequest, response) {
  const id = response.params.id;
  const body = await Request.json();
  const recipe = {
    id: body.idRecipe,
    titolo: body.name,
    id_categoria: 1,
    preparazione: body.description,
    imageUrl: body.imageUrl,
    steps: body.steps,
  };
  try {
    await connect.query(
      "UPDATE recipes SET titolo = ?, preparazione = ?, url_immagine = ?, WHERE id = ?",
      [recipe.titolo, recipe.preparazione, recipe.imageUrl, recipe.id]
    );
    return new Response(
      JSON.stringify({ success: true, message: "Record updated" })
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: true }));
  }
}
