import { Photo } from './interfaces/photo';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-photo-board',
    templateUrl: './photo-board.component.html',
    styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnChanges{

    @Input() public photos: Photo[];
    public rows: any[][] = [];

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.photos) {
            this.rows = this.groupColumns(changes.photos.currentValue);
        }
    }

    public groupColumns(photos: Photo[]): any[][] {
        const rewRows = [];
        const step = 4;
        for (let index = 0; index < photos.length; index += step) {
            rewRows.push(photos.slice(index, index + step));
        }
        return rewRows;
    }
}