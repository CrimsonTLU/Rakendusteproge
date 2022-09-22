import React, { useState } from "react";
import { Button } from "@mui/material";

export default function Arvutaja(){
    
    const arvud = [1, -1, 100, -100];
    const [sum, setSum] = useState(0);
    const handleClick = (e) => {
        setSum(sum + parseInt(e.target.value));
    }

    return(
        <>
            <p>Summa: {sum}</p>
            {arvud.map((num) => {
                return(
                    <Button
                        variant="outlined"
                        value={num}
                        onClick={(e) => handleClick(e)}
                        sx={{margin: 1}}
                    >
                        {num}
                    </Button>
                );
            })}
        </>
    );
}