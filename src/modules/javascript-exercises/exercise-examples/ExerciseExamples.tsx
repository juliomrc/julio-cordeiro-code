import React from "react";
import { CustomBindExercise } from "./exercises/custom-bind";
import { AtMostOneDigitSwapExercise } from "./exercises/at-most-one-digit-swap";
import { DeDuplicateExercise } from "./exercises/de-duplicate";
import { FlattenArrayExercise } from "./exercises/flatten-array";
import { GetByPathExercise } from "./exercises/get-by-path";
import { InvertBinaryTreeExercise } from "./exercises/invert-binary-tree";
import { MaxWoodLengthExercise } from "./exercises/max-wood-length";
import { NumberOfChangedValuesRequiredToSortExercise } from "./exercises/number-of-changes-required-to-sort";
import { PromisifyExercise } from "./exercises/promisify";
import { ReverseStringExercise } from "./exercises/reverse-string";
import { SharedEntriesExercise } from "./exercises/shared-entries";
import { SimpleDebounceExercise } from "./exercises/simple-debounce";
import { SleepExercise } from "./exercises/sleep";
import { SortMatrixByNumberOfRepetitionsAndByValueExercise } from "./exercises/sort-matrix-by-number-of-repetitions-and-by-value";
import { TraverseMatrixSpiralExercise } from "./exercises/traverse-matrix/traverse-matrix-spiral";
import { ZigZagTraverseMatrixDiagonallyExercise } from "./exercises/traverse-matrix/zig-zag-traverse-matrix-diagonally";
import { GenericTraverseMatrixDiagonallyExercise } from "./exercises/traverse-matrix/traverse-matrix-diagonally";
import { FindTheRabbitExercise } from "./exercises/find-the-rabbit";
import { CustomJestExercise } from "./exercises/custom-jest";

export const ExerciseExamples: React.FC = () => {
    return (
        <>
            <CustomBindExercise />
            <CustomJestExercise />
            <FindTheRabbitExercise />
            <GetByPathExercise />
            <InvertBinaryTreeExercise />
            <FlattenArrayExercise />
            <PromisifyExercise />
            <MaxWoodLengthExercise />
            <TraverseMatrixSpiralExercise />
            <ZigZagTraverseMatrixDiagonallyExercise />
            <GenericTraverseMatrixDiagonallyExercise />
            <SortMatrixByNumberOfRepetitionsAndByValueExercise />
            <SimpleDebounceExercise />
            <SharedEntriesExercise />
            <SleepExercise />
            <AtMostOneDigitSwapExercise />
            <NumberOfChangedValuesRequiredToSortExercise />
            <DeDuplicateExercise />
            <ReverseStringExercise />
        </>
    );
};
