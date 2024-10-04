import React, { useCallback, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import NegaraView from "./NegaraView";

const nilaiDefault = {
  data: [],
  filterData: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BERHASIL":
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
        loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
};

const Negara = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);

  const [cari, setCari] = useSearchParams();
  const cariNegara = cari.get("cariNegara"); // Sesuaikan dengan nama query parameter

  const ambilNegara = async () => {
    try {
      const response = await axios.get(
        "https://freetestapi.com/api/v1/countries"
      );
      const data = response.data;
      dispatch({ type: "FETCH_BERHASIL", payload: data });
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    if (!cariNegara) {
      ambilNegara();
    } else {
      ubahCari(cariNegara);
    }
  }, [cariNegara]);

  const ubahCari = useCallback(
    async (input) => {
      setCari({ cariNegara: input }); // Sesuaikan query parameter

      try {
        const response = await axios.get(
          `https://freetestapi.com/api/v1/countries?search=${input}` // Gunakan URL yang benar
        );
        const data = response.data;
        dispatch({ type: "SET_FILTER", payload: data });
      } catch (error) {
        console.error("Error during search:", error);
      }
    },
    [setCari] // Gunakan setCari sebagai dependensi
  );

  const hasilFilter = cariNegara ? state.filterData : state.data;

  return (
    <NegaraView
      cariNegara={cariNegara}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
      ubahCari={ubahCari}
    />
  );
};

export default Negara;
