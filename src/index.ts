type CardSuitUnion = "clubs" | "diamonds" | "hearts" | "spades";

function displaySuitUnion(suit: CardSuitUnion): string {
  switch (suit) {
    case "clubs": return "♣";
    case "diamonds": return "♦";
    case "hearts": return "♥";
    case "spades": return "♠";
  }
}

console.log(displaySuitUnion("hearts"));
// console.log(displaySuitUnion("joker")); // ❌