
export default function Event({ title, day, half_hour, duration, margin, total, name }) {

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

    const widths = {
        1: 'w-full',
        2: 'w-1/2',
        3: 'w-1/3',
        4: 'w-1/4',
        5: 'w-1/5',
        6: 'w-1/6',
        7: 'w-[calc(900px/7)]',
        8: 'w-[calc(900px/8)]',
        9: 'w-[calc(900px/9)]',
        10: 'w-[calc(900px/10)]',
        11: 'w-[calc(900px/11)]',
        12: 'w-1/12',
        13: 'w-[calc(900px/13)]',
        14: 'w-[calc(900px/14)]',
        15: 'w-[calc(900px/15)]',
        16: 'w-[calc(900px/16)]',
        17: 'w-[calc(900px/17)]',
        18: 'w-[calc(900px/18)]',
        19: 'w-[calc(900px/19)]',
        20: 'w-[calc(900px/20)]'
    }

    const margins = {
        0: 'mx-0',
        450: 'ml-[450px]',
        300: 'ml-[300px]',
        600: 'ml-[600px]',
        225: 'ml-[225px]',
        675: 'ml-[675px]',
        180: 'ml-[180px]',
        360: 'ml-[360px]',
        540: 'ml-[540px]',
        720: 'ml-[720px]',
        150: 'ml-[150px]',
        750: 'ml-[750px]',
        128: 'ml-[128px]',
        257: 'ml-[257px]',
        385: 'ml-[385px]',
        514: 'ml-[514px]',
        642: 'ml-[642px]',
        771: 'ml-[771px]',
        112: 'ml-[112px]',
        337: 'ml-[337px]',
        562: 'ml-[562px]',
        787: 'ml-[787px]',
        100: 'ml-[100px]',
        200: 'ml-[200px]',
        400: 'ml-[400px]',
        500: 'ml-[500px]',
        700: 'ml-[700px]',
        800: 'ml-[800px]',
        90: 'ml-[90px]',
        270: 'ml-[270px]',
        630: 'ml-[630px]',
        810: 'ml-[810px]'
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
        <div className={`${dayVariants[day]} ${startVariants[half_hour]} ${durationVariants[duration]} ${widths[total]} ${margins[margin]} bg-lime-300/80 border border-lime-700/10 rounded-lg m-1 p-1 flex flex-col overflow-hidden`}>
            {name ? <span className="text-xl font-medium text-lime-700">{name}</span> : <></>}
            <span className="text-xl font-medium text-lime-700">{hour}{half} {half_hour >= 24 ? "PM" : "AM"}</span>
            <span className="text-md text-lime-700">{title}</span>
        </div>
    )
}
