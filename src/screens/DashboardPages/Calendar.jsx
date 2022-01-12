import React, { useState } from "react";
import LeftNavBar from "../../components/Dashboard/LeftNavBar";

import { Error } from "../../components/main";

import { Box, Main } from "../../components/Dashboard";

const Calendar = () => {
  const [error, setError] = useState(false);
  return (
    <div className="flex justify-between font-Montserrat">
      <LeftNavBar page="calendar" />
      <Main>
        <Box>
          <h1 className="text-textColor font-bold text-xl">Takvim</h1>
          <Error error={error}>
            Bir Hata Oluştu Lütfen Daha Sonra Tekrar Deneyin
          </Error>
        </Box>
      </Main>
    </div>
  );
};

export default Calendar;
