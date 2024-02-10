import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: {
        AssignmentList,
        AssignmentCreate,
    },
    template: `
        <section class="space-y-6">
            <h1 class="text-3xl font-bold">Vue JS Task Tracker</h1>
            <assignment-list v-bind:assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <assignment-create @add="add"></assignment-create>
            
        </section>
    `,
    data() {
        return {
            assignments: [
                { name: "3rd Party Api Integration", complete: false, id: 1, },
                { name: "PHP OOP", complete: false, id: 2 },
                { name: "Vue.JS Task Tracker", complete: true, id: 3 },
                { name: "Laravel with MongoDB", complete: false, id: 4 },
                { name: "C++ Problem Solving", complete: false, id: 5 },
            ],

        };
    },

    computed: {
        // inProgress() {
        //     return this.assignments.filter((assignment) => !assignment.complete);
        // },
        filters() {
            return {
                inProgress: this.assignments.filter((assignment) => !assignment.complete),
                completed: this.assignments.filter((assignment) => assignment.complete),
            }
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            })
        }
    }
};