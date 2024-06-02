import { System, SystemType, TransformComponent, Scene, Entity } from "excalibur";
export declare class PickerSystem extends System<TransformComponent> {
    readonly types: readonly ["ex.transform"];
    readonly systemType = SystemType.Update;
    priority: number;
    lastFrameEntityToPointers: Map<number, number[]>;
    currentFrameEntityToPointers: Map<number, number[]>;
    private _engine;
    private _receiver;
    initialize(scene: Scene): void;
    addPointerToEntity(entity: Entity, pointerId: number): void;
    private _processPointerToEntity;
    update(entities: Entity[], _delta: number): void;
}
