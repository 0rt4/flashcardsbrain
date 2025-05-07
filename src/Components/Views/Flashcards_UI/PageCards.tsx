import React from "react";
import FlashcardForm from "./FlashcardForm";
import FlashcardsList from "./FlashcardsList";

export default function PageCards() {
    return  <div className="flex flex-1 flex-col p-6s}">
            <FlashcardsList />

            <FlashcardForm />
            </div>;
}