import {readFile} from "fs";

readFile("student_data.json" ,"utf8",(error,data) => {
    if(error){
        console.error(error);
        return
    }
    try{
        const json_array =Json.parse(data);
        for(const obj of json_array)
        {
            const name=obj.name ??"property not found";
            console.log('Name:${name}');
        }

    }
    catch(parseErr)
    {
        console.error("Parse Error", parseErr.message);
    }
});