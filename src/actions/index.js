//actions ENUM_BUYUK HARFLE YAZILIR
export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_MEMORY = "totali hafızaya ekle";
export const RECALL_MEMORY = "hafızayı total ile işleme sok";
export const CLEAR_MEMORY = "hafızayı sıfırla";

//action creator : stajyer

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: parseInt(number) };
  //payload: parseInt(number) diye de toplamda sayıları numbera çevirebilirsin.
};

export const changeOperation = (number) => {
  return { type: CHANGE_OPERATION, payload: number };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const addMemory = (number) => {
  return { type: ADD_MEMORY, payload: number };
};

export const recallMemory = (number) => {
  return { type: RECALL_MEMORY, payload: number };
};

export const clearMemory = () => {
  return { type: CLEAR_MEMORY };
};
