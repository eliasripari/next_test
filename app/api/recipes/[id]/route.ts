import { NextRequest, NextResponse } from "next/server";
import db from "@/app/data/db";

// CANCELLA RICETTA
export async function DELETE(Request: NextRequest, Response: NextResponse) {
  const id = Response.params.id;

  try {
    await db.query("DELETE FROM recipes WHERE id = ?", [id]);
  } catch (error) {
    return new Response(JSON.stringify({ error: true }));
  }
}

// AGGIORNA RICETTA
export async function PATCH(request: NextRequest, Response: NextResponse) {
  const id = Response.params.id;
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
