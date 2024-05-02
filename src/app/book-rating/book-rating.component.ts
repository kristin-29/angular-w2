import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book {
  title: string;
  description: string;
  authors: string[];
  rating: number;
  ratings: number[];
  hasRated: boolean;
}

@Component({
    selector: 'app-book-rating',
    templateUrl: './book-rating.component.html',
    styleUrls: ['./book-rating.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule],
  })

  export class BookRatingComponent {
    books: Book[] = [
      {
        "title": "The Cruel Prince",
        "description": "One terrible morning, Jude and her sisters see their parents murdered in front of them. The terrifying assassin abducts all three girls to the world of Faerie, where Jude is installed in the royal court but mocked and tormented by the Faerie royalty for being mortal. As Jude grows older, she realises that she will need to take part in the dangerous deceptions of the fey to ever truly belong. But the stairway to power is fraught with shadows and betrayal. And looming over all is the infuriating, arrogant and charismatic Prince Cardan...",
        "authors": ["Holly Black"],
        "rating": 0,
        "ratings": [],
        "hasRated": false
      },
      {
        "title": "Thirteen Reasons Why",
        "description": "The book follows the story of Hannah Baker, a high school freshman, and the thirteen reasons why she has died by suicide. Following her death, Hannah leaves behind a series of seven double-sided cassette tapes detailing the thirteen specific people and events that she blames for her demise. Two weeks after her death, these cassette tapes are mailed out with directions to pass the tapes on to the next person on the tape.",
        "authors": ["Jay Asher"],
        "rating": 0,
        "ratings": [],
        "hasRated": false
      },
      {
        "title": "Eleanor & Park",
        "description": "Set over one school year in 1986, Eleanor & Park is the story of two star-crossed misfits—smart enough to know first love almost never lasts, but brave and desperate enough to try.",
        "authors": ["Rainbow Rowell"],
        "rating": 0,
        "ratings": [],
        "hasRated": false
      },
      {
        "title": "Looking for Alaska",
        "description": "Miles “Pudge” Halter is done with his safe life at home. His whole life has been one big non-event, and his obsession with famous last words has only made him crave “the Great Perhaps” even more (Francois Rabelais, poet). He heads off to the sometimes crazy and anything-but-boring world of Culver Creek Boarding School, and his life becomes the opposite of safe. Because down the hall is Alaska Young. The gorgeous, clever, funny, sexy, self-destructive, screwed up, and utterly fascinating Alaska Young. She is an event unto herself. She pulls Pudge into her world, launches him into the Great Perhaps, and steals his heart.",
        "authors": ["John Green"],
        "rating": 0,
        "ratings": [],
        "hasRated": false
      },
      {
        "title": "The Fault in Our Stars",
        "description": "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
        "authors": ["John Green"],
        "rating": 0,
        "ratings": [],
        "hasRated": false
      },
    ];
    currentBookIndex = 0;
    get currentBook(): Book {
      return this.books[this.currentBookIndex];
    }
  
    restart() {
      this.currentBookIndex = 0;
      this.books.forEach((book) => (book.hasRated = false));
    }
  
    finish() {
      alert('Ready!');

    }
  
    get allBooksRated(): boolean {
      return this.books.every((book) => book.hasRated);
    }
  
    rateBook(rating: number) {
      this.currentBook.ratings.push(rating);
      this.currentBook.rating =
        this.currentBook.ratings.reduce((a, b) => a + b) /
        this.currentBook.ratings.length;
      this.currentBook.hasRated = true;
      this.currentBookIndex = (this.currentBookIndex + 1) % this.books.length;
    }
  
    updateBook(title: string, description: string, authors: string[]) {
      this.currentBook.title = title;
      this.currentBook.description = description;
      this.currentBook.authors = authors;
    }
  }
