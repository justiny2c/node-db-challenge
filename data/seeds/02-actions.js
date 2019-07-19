
exports.seed = function(knex, Promise) {
  return knex('actions').insert([   
    { project_id: "1", description: 'Action 1', notes: "Testing 1", completed: false},
    { project_id: "1", description: 'Action 2', notes: "Testing 2", completed: false},
    { project_id: "1", description: 'Action 3', notes: "Testing 3", completed: false},
    { project_id: "2", description: 'Action 4', notes: "Testing 4", completed: false},
    { project_id: "2", description: 'Action 5', notes: "Testing 5", completed: false},
    { project_id: "2", description: 'Action 6', notes: "Testing 6", completed: false},
  ]);
};
