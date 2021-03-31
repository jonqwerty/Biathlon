import faker from 'faker'


export const createUser = () => {
    return {
       
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        hit: faker.datatype.number({
            'min': 1,
            'max': 40
          }),
        rateOfFire: (faker.datatype.number({
            'min': 200,
            'max': 500
          })) / 10,
       
    }
  }

export const createUsers = (numUsers) => {
    return Array.from({length: numUsers}, createUser)
                //.map(u =>  ({...u, place: faker.datatype.number({'min': 1,'max': numUsers})}) )
                //.sort((a, b) => b.score - a.score )
                .map((u, index )=>  ({...u, place: index+1}))
}
