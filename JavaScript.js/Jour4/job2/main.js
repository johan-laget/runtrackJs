function jsonValueKey(jsonString, key) {
    try {
        const jsonObject = JSON.parse(jsonString);
        if (key in jsonObject) {
            return jsonObject[key];
        } else {
            return "";
        }
    } catch (error) {
        console.error("Une erreur s'est produite :", error);
        return null;
    }
}

fetch('donnees.json')
    .then(response => response.text())
    .then(data => {
        console.log("clé'name' est :", jsonValueKey(data, "name"));
        console.log("clé'address' est :", jsonValueKey(data, "address"));
        console.log("clé'city' est :", jsonValueKey(data, "city"));
        console.log("clé'nb_staff' est :", jsonValueKey(data, "nb_staff"));
        console.log("clé'creation' est :", jsonValueKey(data, "creation"));
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération du fichier JSON :', error);
    });
