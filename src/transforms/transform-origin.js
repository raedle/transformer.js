import Matrix from '../utils/matrix';
import Transform from './transform';

export default class TransformOrigin extends Transform {

    constructor(element, ratioX = 0, ratioY = 0) {
        super();

        if (!element) {
            throw new Error(`element is null or undefined`);
        }

        this.element = element;
        this.set(ratioX, ratioY);
    }

    set(ratioX, ratioY) {
        this.ratioX = ratioX;
        this.ratioY = ratioY;
    }


    get inverse() {
        return TransformOrigin.from(this.element, this.matrix.inverse);
    }

    /**
     * Applies this transform to the matrix given as parameter.
     * 
     * @param {any} matrix The matrix to which this transform will be applied.
     * 
     * @memberOf TransformOrigin
     */
    apply(matrix) {

        // TODO Remove if a notifier to property clientWidth/clientHeight change has been
        // attached to element. Until then always reforce calculation of transform origin.
        const x = this.element.clientWidth * this.ratioX;
        const y = this.element.clientHeight * this.ratioY;

        this.matrix = new Matrix([
            [1, 0, x],
            [0, 1, y],
            [0, 0, 1]
        ]);

        super.apply(matrix);
    }

    /**
     * Unapplies this transformation from the matrix given as paramter.
     * 
     * @param {any} matrix The matrix from which this transform will be unapplied.
     * 
     * @memberOf TransformOrigin
     */
    unapply(matrix) {

        // TODO Remove if a notifier to property clientWidth/clientHeight change has been
        // attached to element. Until then always reforce calculation of transform origin.
        const x = this.element.clientWidth * this.ratioX;
        const y = this.element.clientHeight * this.ratioY;

        this.matrix = new Matrix([
            [1, 0, x],
            [0, 1, y],
            [0, 0, 1]
        ]);

        super.unapply(matrix);
    }

    update(matrix) {

        if (!(matrix instanceof Matrix)) {
            throw new Error(`matrix needs to be of type ${Matrix.name}`);
        }

        const M = matrix;

        this.set(M.tx, M.ty);
    }

    /**
     * Reset transform origin.
     * 
     * @memberOf TransformOrigin
     */
    reset() {
        this.set(0, 0);
        super.reset();
    }

    static from(element, matrix) {
        const transform = new TransformOrigin(element);
        transform.update(matrix);
        return transform;
    }

    toString() {
        return `${this.constructor.name} [ratioX=${this.ratioX}, ratioY=${this.ratioY}]`;
    }
}