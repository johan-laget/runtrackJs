const getDayName = (number) => {
    const joursSemaines = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    return joursSemaines[number];
  };
  
  const getMonthName = (number) => {
    const mois = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];
    return mois[number];
  };
  
  function jourTravaille(date) {
      const holidays2024 = [
          new Date(2024, 0, 1),  // Nouvel An
          new Date(2024, 3, 1), // pack
          new Date(2024, 3, 21), // Fête de la Jeunesse
          new Date(2024, 4, 1),  // Fête du Travail
          new Date(2024, 4, 8),  // Victoire des Alliés
          new Date(2024, 4, 30), // Ascension
          new Date(2024, 6, 1),  // Fête nationale
          new Date(2024, 7, 15), // Assomption
          new Date(2024, 10, 1), // Toussaint
          new Date(2024, 10, 11),// Armistice
          new Date(2024, 11, 25) // Noël
      ];
  
      const currentDayOfWeek = date.getDay(); 
      const weekStart = date.getDate() - currentDayOfWeek; 
      const weekEnd = weekStart + 6;
  
      console.log("Semaine du", getDayName(weekStart), getMonthName(date.getMonth()), date.getFullYear(), "au", getDayName(weekEnd), getMonthName(date.getMonth()), date.getFullYear());
  
      for (let i = weekStart; i <= weekEnd; i++) {
          const tempDate = new Date(date.getFullYear(), date.getMonth(), i);
          const dayOfWeek = tempDate.getDay();
          const dayName = getDayName(dayOfWeek);
          const monthName = getMonthName(tempDate.getMonth());
  
          if (i >= 1 && i <= 31) {
              const isHoliday = holidays2024.some(holiday => holiday.getTime() === tempDate.getTime());
              if (isHoliday) {
                  console.log(`${dayName} ${i} ${monthName} ${date.getFullYear()} est un jour férié.`);
              } else if (dayOfWeek === 0 || dayOfWeek === 6) {
                  console.log(`${dayName} ${i} ${monthName} ${date.getFullYear()} est un week-end.`);
              } else {
                  console.log(`${dayName} ${i} ${monthName} ${date.getFullYear()} est un jour travaillé.`);
              }
          }
      }
  }
  
  // Exemple d'utilisation :
  jourTravaille(new Date()); // Semaine actuelle pour chaque semaine.
