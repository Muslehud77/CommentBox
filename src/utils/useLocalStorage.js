

export const useLocalStorage=()=>{
    const getComments = ()=>{
        const comments = window.localStorage.getItem("comments")
        return JSON.parse(comments)
    }

    const setComments = (data)=>{
        try{

            window.localStorage.setItem("comments",JSON.stringify(data))
        }catch(err){
            console.log(err);
        }

       
    }


   
    return {getComments,setComments};

}