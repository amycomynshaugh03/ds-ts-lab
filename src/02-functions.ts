import {Friend, Colleague } from './myTypes'
import { friends } from './01-basics';
import { colleagues } from './01-basics';

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(friends: Friend[]): string[] {
  return friends.map(f => older(f));
}

console.log(allOlder(friends));


function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], newColleague: Colleague): Colleague[] {
  const highest = highestExtension(cs).contact.extension;

  newColleague.contact.extension = highest + 1;
  cs.push(newColleague);

  return cs;
}

const newColleague: Colleague = {
  name: "Sheild O Connell",
  department: "HR",
  contact: {
    email: "soc@here.com",
    extension: 133,
  },
};

console.log(addColleague(colleagues.current, newColleague));