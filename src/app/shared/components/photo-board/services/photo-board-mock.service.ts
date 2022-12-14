import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { Observable, of } from 'rxjs';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { Photo } from '../interfaces/photo';

export class PhotoBoardMockService extends PhotoBoardService {
    public getPhotos(): Observable<Photo[]> {
        return of(buildPhotoList());
    }
}