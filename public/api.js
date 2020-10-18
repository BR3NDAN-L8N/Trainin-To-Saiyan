const API = {
    async getLastWorkout() {
        let res;
        try {
            res = await fetch("/api/workouts");  //  fetch here is a GET and returns a promise.
        } catch (err) {
            console.log(err)
        }
        const json = await res.json();  //  converting res into json so we can access the body

        return json[json.length - 1];  //  gets the last exercise in the response from DB
    },
    
    async addExercise(data) {
        const id = location.search.split("=")[1];

        const res = await fetch("/api/workouts/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const json = await res.json();

        return json;
    },

    async createWorkout(data = {}) {
        const res = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });
        const json = await res.json();

        return json;
    },

    async getWorkoutsInRange() {
        const res = await fetch(`/api/workouts/range`);
        const json = await res.json();

        return json;
    },
};
