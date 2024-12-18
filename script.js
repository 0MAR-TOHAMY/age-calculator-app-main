    document.getElementById('calculate-age').addEventListener('click', () => {

        const day = document.getElementById('day').value.trim();
        const month = document.getElementById('month').value.trim();
        const year = document.getElementById('year').value.trim();

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();


        document.querySelectorAll('.block input').forEach(input => {
        input.style.border = "1px solid #ccc";
        });


        let isValid = true;

        if (!/^\d+$/.test(day) || day < 1 || day > 31) {
        setError('day', 'Enter a valid day (1-31).');
        isValid = false;
        }

        if (!/^\d+$/.test(month) || month < 1 || month > 12) {
        setError('month', 'Enter a valid month (1-12).');
        isValid = false;
        }

        if (!/^\d+$/.test(year) || year > currentYear || year < 1900) {
        setError('year', `Enter a valid year (1900-${currentYear}).`);
        isValid = false;
        }

        if (isValid) {
        const enteredDate = new Date(`${year}-${month}-${day}`);
        if (
            enteredDate.getFullYear() != year || 
            enteredDate.getMonth() + 1 != month || 
            enteredDate.getDate() != day
        ) {
            setError('day', 'Enter a valid date.');
            isValid = false;
        }
        }

        if (isValid) {
        const birthDate = new Date(`${year}-${month}-${day}`);
        let ageYears = currentYear - birthDate.getFullYear();
        let ageMonths = currentMonth - (birthDate.getMonth() + 1);
        let ageDays = currentDay - birthDate.getDate();

        if (ageDays < 0) {
            ageDays += new Date(currentYear, currentMonth - 1, 0).getDate();
            ageMonths--;
        }

        if (ageMonths < 0) {
            ageMonths += 12;
            ageYears--;
        }

        document.querySelector('.results h1:nth-child(1) span').textContent = ageYears;
        document.querySelector('.results h1:nth-child(2) span').textContent = ageMonths;
        document.querySelector('.results h1:nth-child(3) span').textContent = ageDays;
        }
    });

    function setError(field, message) {
        alert(message);
    }