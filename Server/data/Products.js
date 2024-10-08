const products = [
  {
    name: "Harry Potter and the Philosopher's Stone",
    author: "J.K Rowling",
    image: "/images/6.png",
    description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old. The book was first published in the United Kingdom on 26 June 1997 by Bloomsbury. It was published in the United States the following year by Scholastic Corporation under the title Harry Potter and the Sorcerer's Stone. It won most of the British book awards that were judged by children and other awards in the US. The book reached the top of the New York Times list of best-selling fiction in August 1999 and stayed near the top of that list for much of 1999 and 2000. It has been translated into at least 73 other languages, and has been made into a feature-length film of the same name, as have all six of its sequels. The novel has sold in excess of 120 million copies, making it the third best-selling novel of all time.",
    price: 89,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    // https://res.cloudinary.com/sagarmish1234/image/upload/v1644578771/pwg8qz7a4dbmenoso9mn.jpg
  },
  {
    name: "Harry Potter and the Prisoner of Azkban",
    author: "J.K Rowling",
    image: "/images/5.png",
    description: "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies. The book was published in the United Kingdom on 8 July 1999 by Bloomsbury and in the United States on 8 September 1999 by Scholastic, Inc. Rowling found the book easy to write, finishing it just a year after she began writing it. The book sold 68,000 copies in just three days after its release in the United Kingdom and since has sold over three million in the country. The book won the 1999 Whitbread Children's Book Award, the Bram Stoker Award, and the 2000 Locus Award for Best Fantasy Novel and was short-listed for other awards, including the Hugo.",
    price: 599,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
    // https://res.cloudinary.com/sagarmish1234/image/upload/v1644579063/a7jviqc61u35qousbjqw.jpg
  },
  {
    name: "Harry Potter and the Goblet of Fire",
    author: "J.K Rowling",
    image: "/images/4.png",
    description: "Harry Potter and the Goblet of Fire is a fantasy novel written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete. The book was published in the United Kingdom by Bloomsbury and in the United States by Scholastic. In both countries, the release date was 8 July 2000. This was the first time a book in the series was published in both countries at the same time. The novel won a Hugo Award, the only Harry Potter novel to do so, in 2001. The book was adapted into a film, released worldwide on 18 November 2005, and a video game by Electronic Arts.",
    price: 929,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
    // https://res.cloudinary.com/sagarmish1234/image/upload/v1644579114/jpzv4mtcphflt4bjwgjt.jpg
  },
  {
    name: "Harry Potter and the Order of the Phoenix",
    author: "J.K Rowling",
    image: "/images/3.png",
    description: "Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. It sold five million copies in the first 24 hours of publication. It is the longest book of the series. Harry Potter and the Order of the Phoenix won several awards, including the American Library Association Best Book Award for Young Adults in 2003. The book was also made into a 2007 film, and a video game by Electronic Arts.",
    price: 399,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
    // https://res.cloudinary.com/sagarmish1234/image/upload/v1644579147/q1swmdk9v7hxiqr6nrox.jpg
  },
  {
    name: "Harry Potter and the Half Blood Prince",
    author: "J.K Rowling",
    image: "/images/2.png",
    description: "Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J.K. Rowling and the sixth and penultimate novel in the Harry Potter series. Set during Harry Potter's sixth year at Hogwarts, the novel explores the past of the boy wizard's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore. The book was published in the United Kingdom by Bloomsbury and in the United States by Scholastic on 16 July 2005, as well as in several other countries. It sold nine million copies in the first 24 hours after its release, a record that was eventually broken by its sequel, Harry Potter and the Deathly Hallows. There were many controversies before and after it was published, including the right to read copies delivered before the release date in Canada. Reception to the novel was generally positive, and it won several awards and honors, including the 2006 British Book of the Year award.",
    price: 49,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
    // https://res.cloudinary.com/sagarmish1234/image/upload/v1644579207/edsou4ro0bfftlb7igpi.jpg
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    author: "J.K Rowling",
    image: "/images/1.png",
    description: "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the main Harry Potter series. It was released on 14 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort. Deathly Hallows shattered sales records upon release, surpassing marks set by previous titles of the Harry Potter series. It holds the Guinness World Record for most novels sold within 24 hours of release, with 8.3 million sold in the US and 2.65 million in the UK. Generally well received by critics, the book won the 2008 Colorado Blue Spruce Book Award, and the American Library Association named it the 'Best Book for Young Adults'.",
    price: 29,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    // https://res.cloudinary.com/sagarmish1234/image/upload/v1644581206/mcf2ecauzzz5bxeied5m.jpg
  },
  {
    name: "Harry Potter and the Chamber of Secret",
    author: "J.K Rowling",
    image: "/images/7.png",
    description: "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks. The book was published in the United Kingdom on 2 July 1998 by Bloomsbury and later in the United States on 2 June 1999 by Scholastic Inc. Although Rowling says she found it difficult to finish the book, it won high praise and awards from critics, young readers, and the book industry, although some critics thought the story was perhaps too frightening for younger children. Much like with other novels in the series, Harry Potter and the Chamber of Secrets triggered religious debates; some religious authorities have condemned its use of magical themes, whereas others have praised its emphasis on self-sacrifice and the way one's character is the result of one's choices.",
    price: 29,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    // https://res.cloudinary.com/sagarmish1234/image/upload/v1644767765/q2wf0ideomptzkciapok.png
  },
];

export default products;
