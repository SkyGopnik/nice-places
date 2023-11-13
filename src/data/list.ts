export const list = {
  bars: {
    name: "Bars",
    locations: [
      {
        name: "Beer Pong 1",
        category: "Beer and Soft 1",
        coordinates: [55.771783, 37.619508]
      },
      {
        name: "Beer Pong 2",
        category: "Beer and Soft 2",
        coordinates: [55.767981, 37.602531]
      },
      {
        name: "Beer Pong 3",
        category: "Beer and Soft 3",
        coordinates: [55.762032, 37.638814]
      },
      {
        name: "Beer Pong 4",
        category: "Beer and Soft 4",
        coordinates: [55.762032, 37.638824]
      },
      {
        name: "Beer Pong 5",
        category: "Beer and Soft 5",
        coordinates: [55.747050, 37.588689]
      }
    ]
  },
  food: {
    name: "Food",
    locations: [
      {
        name: "Food Pong 1",
        category: "Food and Soft 1",
        coordinates: [55.795656, 37.581211]
      },
      {
        name: "Food Pong 2",
        category: "Food and Soft 2",
        coordinates: [55.759231, 37.684273]
      },
      {
        name: "Food Pong 3",
        category: "Food and Soft 3",
        coordinates: [55.723742, 37.724209]
      },
      {
        name: "Food Pong 4",
        category: "Food and Soft 4",
        coordinates: [55.782712, 37.731939]
      },
      {
        name: "Food Pong 5",
        category: "Food and Soft 5",
        coordinates: [55.734646, 37.504989]
      }
    ]
  },
  clubs: {
    name: "Clubs",
    locations: [
      {
        name: "Clubs Pong 1",
        category: "Clubs and Soft 1",
        coordinates: [55.836393, 37.604763]
      },
      {
        name: "Clubs Pong 2",
        category: "Clubs and Soft 2",
        coordinates: [55.846714, 37.503798]
      },
      {
        name: "Clubs Pong 3",
        category: "Clubs and Soft 3",
        coordinates: [55.808140, 37.464004]
      },
      {
        name: "Clubs Pong 4",
        category: "Clubs and Soft 4",
        coordinates: [55.777254, 37.482935]
      },
      {
        name: "Clubs Pong 5",
        category: "Clubs and Soft 5",
        coordinates: [55.780366, 37.639319]
      }
    ]
  },
  coffee: {
    name: "Coffee",
    locations: [
      {
        name: "Coffee Pong 1",
        category: "Coffee and Soft 1",
        coordinates: [55.842303, 37.694731]
      },
      {
        name: "Coffee Pong 2",
        category: "Coffee and Soft 2",
        coordinates: [55.866392, 37.643558]
      },
      {
        name: "Coffee Pong 3",
        category: "Coffee and Soft 3",
        coordinates: [55.732488, 37.556092]
      },
      {
        name: "Coffee Pong 4",
        category: "Coffee and Soft 4",
        coordinates: [55.748253, 37.649728]
      },
      {
        name: "Coffee Pong 5",
        category: "Coffee and Soft 5",
        coordinates: [55.801236, 37.697998]
      }
    ]
  },
  beauty: {
    name: "Beauty",
    locations: [
      {
        name: "Beauty Pong 1",
        category: "Beauty and Soft 1",
        coordinates: [55.756652, 37.636390]
      },
      {
        name: "Beauty Pong 2",
        category: "Beauty and Soft 2",
        coordinates: [55.765292, 37.601458]
      },
      {
        name: "Beauty Pong 3",
        category: "Beauty and Soft 3",
        coordinates: [55.753691, 37.617745]
      },
      {
        name: "Beauty Pong 4",
        category: "Beauty and Soft 4",
        coordinates: [55.747406, 37.643248]
      },
      {
        name: "Beauty Pong 5",
        category: "Beauty and Soft 5",
        coordinates: [55.749944, 37.614745]
      }
    ]
  }
};

export type ListKeys = keyof typeof list;
export const listKeys = (Object.keys(list) as Array<ListKeys>);

