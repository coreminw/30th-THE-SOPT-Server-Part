interface Member{
    name: string;
    group: string;
}

interface Dinner{
    member: Member[];
    shuffle(array: Member[]): Member[];
    organize(array: Member[]): void;
}

const dinner = {
    member: [
        {
            name: '채정아',
            group: 'ob'
        },
        {
            name: '김민욱',
            group: 'yb'
        },
        {
            name: '강민재',
            group: 'yb'
        },
        {
            name: '김루희',
            group: 'ob'
        },
        {
            name: '박진수',
            group: 'ob'
        }
    ],
    shuffle(array: Member[]) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array: Member[]) {
        this.shuffle(array);

        const ob: Member = Object(array.find((member: Member) => (member.group === 'ob')));
        const yb: Member = Object(array.find((member: Member) => (member.group === 'yb')));

        const dinnerMember: string[] = [ob.name, yb.name];

        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    }
};

dinner.organize(dinner.member);