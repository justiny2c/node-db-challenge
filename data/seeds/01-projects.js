
exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { name: 'Project 1', description: "Testing 1", completed: false},
    { name: 'Project 2', description: "Testing 2", completed: false},
    { name: 'Project 3', description: "Testing 3", completed: false},
  ]);
};
