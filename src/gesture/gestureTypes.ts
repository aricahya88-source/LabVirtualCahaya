export type GestureName =
  | "open_palm"
  | "fist"
  | "pinch"
  | "swipe_left"
  | "swipe_right"
  | "two_hands_apart"
  | "two_hands_close";

export type GestureAction = {
  gesture: GestureName;
  description: string;
  targetParameter?: string;
};

export const plannedGestureActions: GestureAction[] = [
  { gesture: "open_palm", description: "Mulai atau lanjutkan simulasi" },
  { gesture: "fist", description: "Jeda simulasi" },
  { gesture: "pinch", description: "Ambil dan geser objek simulasi" },
  { gesture: "swipe_left", description: "Mengurangi nilai parameter aktif" },
  { gesture: "swipe_right", description: "Menambah nilai parameter aktif" },
  { gesture: "two_hands_apart", description: "Memperbesar jarak sumber atau panjang gelombang" },
  { gesture: "two_hands_close", description: "Memperkecil jarak sumber atau panjang gelombang" }
];
