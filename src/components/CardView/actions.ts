import { fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props";

export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    const response = await fetchGetCarData(id);
    setCarData(response ?? null);
  } catch (error) {
    console.error("Erro ao buscar dados da API", error);
    setCarData(null);
  }
};

export const handlePreviousItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    if (carData && carData.id > 1) {
      const response = await fetchGetCarData(carData.id - 1);
      setCarData(response ?? null);
    }
  } catch (error) {
    console.error("Erro ao buscar dados da API", error);
    setCarData(null);
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    if (carData && carData.id < 10) {
      const response = await fetchGetCarData(carData.id + 1);
      setCarData(response ?? null);
    }
  } catch (error) {
    console.error("Erro ao buscar dados da API", error);
    setCarData(null);
  }
};
