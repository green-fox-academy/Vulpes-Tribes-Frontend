import { Injectable } from '@angular/core';
import { BuildingsService } from '../buildings/buildings.service';
import { Building } from '../../_models/building.model';
import { Observable } from 'rxjs';
import { NotificationsResponseMock } from '../../_helpers/mocks/notificationResponse.mock';
import {TribesNotification} from '../../_models/notification.model';

const mockNotifications = new NotificationsResponseMock().notifications;

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {

  constructor() {
  }

  getNotifications(): TribesNotification[] {
    return mockNotifications;
  }
}
