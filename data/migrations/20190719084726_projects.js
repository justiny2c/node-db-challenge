
    exports.up = function(knex) {
        return knex.schema
            .createTable("projects", tbl => {
                tbl.increments()
                tbl
                .string("name")
                .unique()
                .notNullable()
                tbl
                .string("description")
                .notNullable()
                tbl
                .boolean("completed")
                .notNullable()
            })
            .createTable("actions", tbl => {
                tbl.increments()
                tbl
                .integer("project_id")
                .unsigned()
                .notNullable()
                tbl
                .string("description")
                .notNullable()
                tbl
                .string("notes")
                tbl
                .boolean("completed")
                .notNullable()
            })
    };
    
    exports.down = function(knex) {
        return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('projects_actions')
        .dropTableIfExists('actions')
    }