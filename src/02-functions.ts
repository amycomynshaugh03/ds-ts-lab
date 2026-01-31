import { Friend, Colleague, EmailContact } from './myTypes';
import { friends } from './01-basics';
import { colleagues } from './01-basics';

function older(f: Friend) {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(friends: Friend[]) {
  return friends.map(f => older(f));
}

console.log(allOlder(friends));


function highestExtension(cs: Colleague[]) { // Inferred retun type
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

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}
function findFriends(
  friends: Friend[],
  predicate: (friend: Friend) => boolean
): string[] {
  return friends
    .filter(predicate)
    .map(friend => friend.name);
}


console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
