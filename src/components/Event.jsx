
export default function Event({ title, day, half_hour, duration }) {
    
    const dayVariants = {
        0: 'col-start-[2]',
        1: 'col-start-[3]',
        2: 'col-start-[4]',
        3: 'col-start-[5]',
        4: 'col-start-[6]',
        5: 'col-start-[7]',
        6: 'col-start-[8]',
    }

    const startVariants = {
        0: 'row-start-[2]',
        1: 'row-start-[3]',
        2: 'row-start-[4]',
        3: 'row-start-[5]',
        4: 'row-start-[6]',
        5: 'row-start-[7]',
        6: 'row-start-[8]',
        7: 'row-start-[9]',
        8: 'row-start-[10]',
        9: 'row-start-[11]',
        10: 'row-start-[12]',
        11: 'row-start-[13]',
        12: 'row-start-[14]',
        13: 'row-start-[15]',
        14: 'row-start-[16]',
        15: 'row-start-[17]',
        16: 'row-start-[18]',
        17: 'row-start-[19]',
        18: 'row-start-[20]',
        19: 'row-start-[21]',
        20: 'row-start-[22]',
        21: 'row-start-[23]',
        22: 'row-start-[24]',
        23: 'row-start-[25]',
        24: 'row-start-[26]',
        25: 'row-start-[27]',
        26: 'row-start-[28]',
        27: 'row-start-[29]',
        28: 'row-start-[30]',
        29: 'row-start-[31]',
        30: 'row-start-[32]',
        31: 'row-start-[33]',
        32: 'row-start-[34]',
        33: 'row-start-[35]',
        34: 'row-start-[36]',
        35: 'row-start-[37]',
        36: 'row-start-[38]',
        37: 'row-start-[39]',
        38: 'row-start-[40]',
        39: 'row-start-[41]',
        40: 'row-start-[42]',
        41: 'row-start-[43]',
        42: 'row-start-[44]',
        43: 'row-start-[45]',
        44: 'row-start-[46]',
        45: 'row-start-[47]',
        46: 'row-start-[48]',
        47: 'row-start-[49]',
    }

    const durationVariants = {
        1: 'row-span-1',
        2: 'row-span-2',
        3: 'row-span-3',
        4: 'row-span-4',
        5: 'row-span-5',
        6: 'row-span-6',
        7: 'row-span-7',
        8: 'row-span-8',
        9: 'row-span-9',
        10: 'row-span-10',
        11: 'row-span-11',
        12: 'row-span-12',
        13: 'row-span-13',
        14: 'row-span-14',
        15: 'row-span-15',
        16: 'row-span-16',
        17: 'row-span-17',
        18: 'row-span-18',
        19: 'row-span-19',
        20: 'row-span-20',
        21: 'row-span-21',
        22: 'row-span-22',
        23: 'row-span-23',
        24: 'row-span-24',
        25: 'row-span-25',
        26: 'row-span-26',
        27: 'row-span-27',
        28: 'row-span-28',
        29: 'row-span-29',
        30: 'row-span-30',
        31: 'row-span-31',
        32: 'row-span-32',
        33: 'row-span-33',
        34: 'row-span-34',
        35: 'row-span-35',
        36: 'row-span-36',
        37: 'row-span-37',
        38: 'row-span-38',
        39: 'row-span-39',
        40: 'row-span-40',
        41: 'row-span-41',
        42: 'row-span-42',
        43: 'row-span-43',
        44: 'row-span-44',
        45: 'row-span-45',
        46: 'row-span-46',
        47: 'row-span-47',
        48: 'row-span-48',
    }

    let hour = Math.floor(half_hour / 2)
    if (hour > 12) {
        hour -= 12
    } else if (hour == 0) {
        hour = 12
    }

    let half = ''
    if (half_hour % 2 == 1) {
        half = ':30'
    }
    
    return (
        <div className={`${dayVariants[day]} ${startVariants[half_hour]} ${durationVariants[duration]} bg-lime-300/80 border border-lime-700/10 rounded-lg m-1 p-1 flex flex-col`}>
            <span className="text-xl font-medium text-lime-700">{hour}{half} {half_hour >= 24 ? "PM" : "AM"}</span>
            <span className="text-md text-lime-700">{title}</span>
        </div>
    )
}
