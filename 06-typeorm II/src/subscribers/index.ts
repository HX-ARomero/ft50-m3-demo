import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from "typeorm";
import { Platform } from "../entities/Platform";

@EventSubscriber()
export class PlatformSubsciber implements EntitySubscriberInterface<Platform> {
  listenTo() {
    return Platform;
  }

  beforeInsert(event: InsertEvent<Platform>) {
    //* Convertir el nombre a minúscula
    if (event.entity.name) {
      event.entity.name = event.entity.name.toLowerCase();
    }
  }
  afterInsert(event: InsertEvent<Platform>) {
    console.log(`AFTER INSERT: `, event.entity);
  }
}
