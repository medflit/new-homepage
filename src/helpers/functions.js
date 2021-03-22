

export const capitalize = (sentence) => {
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}

export const dateFormatting = (timeStr) => {
    let date = new Date(timeStr);
    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dateStr = day+"/"+month+"/"+year;

    return (dateStr)
}

export const dateFormat = (myDate) => {
    myDate = myDate.split("-");
    let newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
    console.log(newDate.getTime());

    return (newDate.getDate())
}

export const checkResume = (documents) => {
    if(documents.length === 0) {
        return ""
    }else {
        return documents[0]
    }
}

export const checkMedicalLicense = (documents) => {
    if(documents.length === 0) {
        return ""
    }else {
        return documents[1]
    }
}

export const checkUniCert = (documents) => {
    if(documents.length === 0) {
        return ""
    }else {
        return documents[2]
    }
}

// export default {capitalize, dateFormatting, dateFormat}