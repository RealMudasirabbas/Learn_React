import React, { useEffect } from 'react'
import axios from 'axios';

function DeleteStudent({deleteId,count,countFunc}) {
    const stdId =deleteId;

   useEffect(() => {
    const deleteData = async () => {
        
        try {
            await axios
                .delete(`http://localhost:8080/api/delete-student/${stdId}`
                )
                .then((res) => {
                    countFunc(count + 1)
                    console.log(res);
                })

        } catch (error) {
            console.log(error);
        }
        
    };
    deleteData();
   },[stdId])

    


}

export default DeleteStudent