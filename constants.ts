import { Course, Review, User } from './types';

export const CURRENT_USER: User = {
  name: "Maria Sanchez",
  email: "maria@email.com",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgO7VvDrNZimHIw3HOzeYNrRAPoEXKiBscFARRE3Ug1ygue9K7tkhzDi3GDZ468D2-P4I5BSXKgWcPw0mnFIKK9O11TIBN931CNzW2mAtj7O6Z8bIOe32P7bVsMQXta_QES-WRsaQtY8agLiReBPFdNlDBFtD35iiAozKOSlfd91Z2tpOVwkXLUD2ELXxGXlg3xT8F1G1XJJ_umocl97oF__jvUJB-MBhOPuVNmV0v-SONMn0iC-37BMiTcNMEzObOiTKwee-Vh2Uz"
};

export const COURSES: Course[] = [
  {
    id: "1",
    title: "Introduction to UX Design",
    instructor: "Dr. Anya Sharma",
    rating: 4.8,
    reviewCount: 1245,
    price: 49.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9-c9bC4rRoGigssKCGHR8vyToi8vK2Jv0r5AjFsWhe6qNKyQbI6CbtHNOo6GQSM0VqHKyFQO8HFstO8HRDeV8am1mNSPZioxAvci_G0AzPtUYQGeYO4NsHRNgCVhW63d3DdNLFBYa9GCBHt_CTOmPdASGl-PgjdeRtEGXtmOpNYNtdG2Hm8n8NA3LDsGS1unAwfjc1A0gItN-g8stHhweRLznIG9Pn-kq5BIA9x2_CKj4Qp75WKggsmkWhX_4PT5k2V3YNJkfyvl1",
    category: "Design",
    level: "Beginner",
    progress: 65,
    enrolledStudents: 15400
  },
  {
    id: "2",
    title: "Advanced CSS & Animation",
    instructor: "Prof. David Chen",
    rating: 4.7,
    reviewCount: 890,
    price: 34.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASELM5ciQFTWCUqlwus8v7EYwBp-8ZqUL8fNnPpIv_-Rd3S8_bwTHWT3aY2XJANeEZ7A7AVgLOElt_ZRrEVOcL3r6taQg5jDm97ltihLuU6VA7b_836_NbDzY4HYgvGcXhiWtWngJDA0R3VkytO-M3y5tr7UGkCcSkgwmK4E-FZn_x2faQd_29R_cE7M3-W2eG-IoSnhVZEnJxZ8JykrmSYQpz9kn6yVl7EOYuaMOB4vrZgTuICUxhNIUaVPlWtc2y3tdfi4LMkDei",
    category: "Development",
    level: "Advanced",
    progress: 30,
    enrolledStudents: 8200
  },
  {
    id: "3",
    title: "Data Science Foundations",
    instructor: "Dr. Emily Carter",
    rating: 4.9,
    reviewCount: 3200,
    price: 89.99,
    originalPrice: 129.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeRb3G2-ZAgBIR4pFDGJe-plk5LrRh4IwhjXuzvtctElD5kRPscer9WpQgy89PVMUxYsokubRxr73Ud9CFTHRkK1BK5DtcfoHA3ZFGSQjK4LgiygesetboAuk3xKTN-NU-IYDhWygN8iQGwvY7WsthBrVnentAIZv7U3RjKqYw00CHdb3djghbkOY3CRGB6rIAz974ePVuZ2fiOFzImM-Xr_RrOe9yg-8a6huiVbw44x9ZXq8UKRrMcAGojWjFZYtppGADgVKZxcqa",
    category: "Data Science",
    level: "Beginner",
    progress: 95,
    enrolledStudents: 25000
  },
  {
    id: "4",
    title: "The Complete Web Developer Course 3.0",
    instructor: "John Doe",
    rating: 4.7,
    reviewCount: 12345,
    price: 84.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzbSHWS0KJEw5v5WMXxGsCvZt1CfC5vAF5sHMj6sJPcfNtBvsFdLlytHk8ZmKR04mKzXrvNVQfIz_MBknBm86AeKFACWnccWLoUDOwG2FX5tO4vKT3kZdPpYPSaw_OkEGiiJp_uZILJyodY-aonSyGXJ26lJO70tevLbjs-7lJkMa4oIZ6YAguQJwELQSJncZH6zRU9RrJKzRMwSkswMWnGp3gUjjyX6ovqWAxkqjwYO3v7a19IkcChrxxsMOv1DpuZk4cbeaMYfs2",
    category: "Development",
    level: "All Levels",
    enrolledStudents: 50000
  },
  {
    id: "5",
    title: "Digital Marketing Masterclass",
    instructor: "Emily White",
    rating: 4.6,
    reviewCount: 15201,
    price: 79.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNr9J-d0g7xOtrPWSCrMJbqzN_EAaMUFBkq8QXfHMrYvHT6fCPWmdf92YV3wvPqWDJj4M_WjOmqdOhSHCrpJwnFTdYUFmppBTM_UwOipUp3u4j0haCDeHOKoFFAftX_g7XUACqdzGdRFgnaCBBuJu4Hc1zspZzDuy57Ti9LdrL6LVCKcdlWDV-NyaiTeU85vXmjpPlyznht4efrwfKRn4RTZ61WpMvuZu_erczonvpbI8A2c5RzZAMGMRC22y8w-rUf3MHWUjmOHoB",
    category: "Marketing",
    level: "Intermediate",
    enrolledStudents: 10000
  },
   {
    id: "6",
    title: "Modern React with Redux",
    instructor: "Stephen Grider",
    rating: 4.8,
    reviewCount: 12000,
    price: 19.99,
    originalPrice: 99.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACYtXKBq0qcm6RxQhlMSeQjc2dYVsvZCE-PWLhpuYVn7IjHMANbVBCeViBmtBx_a5s_J1mCIrteTD4laV_HagvGe5PPcCbUOZB3fAjgI70311vPOq1ApPPQtdUz1QpDOtnWoj3pH04DFPneFoJh-35jLMIHdgD34vADcKQ15CiYoC3E2T1jSJdqn0w3xsn31HmXFb3KwUQqLFji-BI-PHYAQw_dw7-sSlL87BJJvHWKKoVYK54Hlg5css_NEZJvLC9yT1XrQJ_khOa",
    category: "Development",
    level: "Intermediate",
    enrolledStudents: 88112
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    user: "Jane Smith",
    userAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgH5-5I6oondrTXlcr-NYJfgYsga1mJ_nUae6ydR59-mY8B-C1h__hOAAek4iK-ADLQ_M3qwX5igwgg7Q9Z-ErUcaAl62g0mRv1ALCXyWcWK0NCESpWEV9mjB-h43TSG2kjsbHS2Ki4pBvxtAUYJlbBGQEEfREJWqzcXg90--zKcUhZ0ubH-2GRVLiwo-OL9_1vh-mUv9ITU2_RCaU2fgnZUwucdPaehChfHspivZuVZl1Fdi4NIUjdS9BWR16jD0mxX642N14-xe2",
    rating: 5,
    comment: "This is by far the best Python course I've taken. The instructor explains complex concepts in a simple way. Highly recommended!"
  },
  {
    id: "r2",
    user: "Michael Johnson",
    userAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwIn8mqyLqLidEGrmF74wN1SUxt1iXAoAd0zaXKC-2D0N-0_Z0iKurPqAsHVJtaIO8f3uhMV_oqrK-HYZRQVCVPgAksXhmDlsPXgwWdfMfREvG516hptogvQdXf1_tQS2q7dznIEy5dPkt2J-tUxhpyCEs0dJkg66FeCiPA9XQPX_N8uIgWO0dFat3HLXo_PaVfMhJ6tIut1pWliXHsZNupLcxhI1sGxpn90W5IjgAUZm-YD4rGPhwD9O_Mj-_xalvvoT4wwDxwCf4",
    rating: 4.5,
    comment: "Fantastic content and great real-world projects. I landed a new job thanks to the skills I learned in this course."
  }
];

export const MOCK_CURRICULUM = [
  {
    title: "Introduction to Python",
    lectures: 4,
    duration: "28m",
    items: [
      { title: "Why Python is the best choice", duration: "05:32", type: "video" },
      { title: "Setting up your environment", duration: "12:15", type: "video" },
      { title: "Course Resources & Downloads", duration: "02:00", type: "article" },
      { title: "Your first 'Hello, World!' program", duration: "08:13", type: "video" }
    ]
  },
  {
    title: "Python Basics",
    lectures: 8,
    duration: "1h 15m",
    items: []
  },
  {
    title: "Data Structures",
    lectures: 12,
    duration: "2h 30m",
    items: []
  }
];