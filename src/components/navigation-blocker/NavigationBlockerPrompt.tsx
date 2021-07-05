import { Button } from "@components/inputs/button";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@material-ui/core";
import React from "react";
import NavigationPrompt from "react-router-navigation-prompt";
import { NavigationBlockerPromptProps } from "./NavigationBlockerTypes";

export const NavigationBlockerPrompt: React.FC<NavigationBlockerPromptProps> =
    ({ isNavigationBlocked, onNavigate, onSaveChanges }) => {
        return (
            <NavigationPrompt when={isNavigationBlocked}>
                {(promptProps) => {
                    const handleNavigateAndSaveChanges = async () => {
                        await onSaveChanges();
                        onNavigate();
                        promptProps.onConfirm();
                    };

                    const handleNavigateWithoutSavingChanges = () => {
                        onNavigate();
                        promptProps.onConfirm();
                    };

                    const handleCancelNavigation = () => {
                        promptProps.onCancel();
                    };

                    return (
                        <Dialog
                            onClose={handleCancelNavigation}
                            open={promptProps.isActive}
                        >
                            <DialogTitle>You have unsaved changes.</DialogTitle>
                            <DialogContent>
                                Are you sure you want to navigate away?
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCancelNavigation}>
                                    Cancel
                                </Button>
                                <Button
                                    onClick={handleNavigateWithoutSavingChanges}
                                >
                                    Navigate without saving
                                </Button>
                                <Button onClick={handleNavigateAndSaveChanges}>
                                    Navigate and save changes
                                </Button>
                            </DialogActions>
                        </Dialog>
                    );
                }}
            </NavigationPrompt>
        );
    };
