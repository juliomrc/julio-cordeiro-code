import React from "react";
import { ExerciseExample } from "./exercise-example";
import atMostOneDigitSwap from "./exercises/at-most-one-digit-swap/atMostOneDigitSwap?raw";
import customBind from "./exercises/custom-bind/customBind?raw";
import deDuplicate from "./exercises/de-duplicate/deDuplicate?raw";
import flattenArray from "./exercises/flatten-array/flatten-array?raw";
import getByPath from "./exercises/get-by-path/getByPath?raw";
import maxWoodLength from "./exercises/max-wood-length/maxWoodLength?raw";
import numberOfChangesRequiredToSort from "./exercises/number-of-changes-required-to-sort/numberOfChangedValuesRequiredToSort?raw";
import promisify from "./exercises/promisify/promisify?raw";
import reverseString from "./exercises/reverse-string/reverseString?raw";
import sharedEntries from "./exercises/shared-entries/sharedEntries?raw";
import simpleDebounce from "./exercises/simple-debounce/simpleDebounce?raw";
import sleep from "./exercises/sleep/sleep?raw";
import sortMatrixByNumberOfRepetitionsAndValue from "./exercises/sort-matrix-by-number-of-repetitions-and-by-value/sortMatrixByNumberOfRepetitionsAndByValue?raw";
import genericTraverseMatrixDiagonally from "./exercises/traverse-matrix/traverse-matrix-diagonally/genericTraverseMatrixDiagonally?raw";
import traverseMatrixSpiral from "./exercises/traverse-matrix/traverse-matrix-spiral/traverseMatrixSpiral?raw";
import zigZagTraverseMatrixDiagonally from "./exercises/traverse-matrix/zig-zag-traverse-matrix-diagonally/zigZagTraverseMatrixDiagonally?raw";
import invertBinaryTree from "./exercises/invert-binary-tree/invertBinaryTree?raw";

export const ExerciseExamples: React.FC = () => {
    return (
        <>
            <ExerciseExample header="atMostOneDigitSwap">
                {atMostOneDigitSwap}
            </ExerciseExample>
            <ExerciseExample header="customBind">{customBind}</ExerciseExample>
            <ExerciseExample header="deDuplicate">
                {deDuplicate}
            </ExerciseExample>
            <ExerciseExample header="flattenArray">
                {flattenArray}
            </ExerciseExample>
            <ExerciseExample header="getByPath">{getByPath}</ExerciseExample>
            <ExerciseExample header="maxWoodLength">
                {maxWoodLength}
            </ExerciseExample>
            <ExerciseExample header="numberOfChangesRequiredToSort">
                {numberOfChangesRequiredToSort}
            </ExerciseExample>
            <ExerciseExample header="promisify">{promisify}</ExerciseExample>
            <ExerciseExample header="reverseString">
                {reverseString}
            </ExerciseExample>
            <ExerciseExample header="sharedEntries">
                {sharedEntries}
            </ExerciseExample>
            <ExerciseExample header="simpleDebounce">
                {simpleDebounce}
            </ExerciseExample>
            <ExerciseExample header="simpleDebounce">
                {simpleDebounce}
            </ExerciseExample>
            <ExerciseExample header="sleep">{sleep}</ExerciseExample>
            <ExerciseExample header="sortMatrixByNumberOfRepetitionsAndValue">
                {sortMatrixByNumberOfRepetitionsAndValue}
            </ExerciseExample>
            <ExerciseExample header="genericTraverseMatrixDiagonally">
                {genericTraverseMatrixDiagonally}
            </ExerciseExample>
            <ExerciseExample header="traverseMatrixSpiral">
                {traverseMatrixSpiral}
            </ExerciseExample>
            <ExerciseExample header="zigZagTraverseMatrixDiagonally">
                {zigZagTraverseMatrixDiagonally}
            </ExerciseExample>
            <ExerciseExample header="invertBinaryTree">
                {invertBinaryTree}
            </ExerciseExample>
        </>
    );
};
