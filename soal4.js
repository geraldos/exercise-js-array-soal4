let silabus1 = ['Math', 'English', 'Programming']
let silabus2 = ['Geography', 'Spanish', 'Programming']


const compare = () => {
    for (let i = 0; i <= silabus1.length; i++) {
        if (silabus1[i] === silabus2[i]) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}

compare()