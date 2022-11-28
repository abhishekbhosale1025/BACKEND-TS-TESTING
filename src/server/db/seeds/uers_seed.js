/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
   {
      firstname : "Abhi",
      lastname : "Bhosale",
      age : 20 
   },
   {
    firstname : "Rushi",
    lastname : "Gaikwad",
    age : 27
   },
  ]);
};
