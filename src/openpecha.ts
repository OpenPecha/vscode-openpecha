import * as vscode from 'vscode';

export class OpenPecha {
    /**
     * Download Pecha from github
     */
    public async download(): Promise<any> {
        vscode.window.showInformationMessage('Hello World from openpecha!');
        return;
    }
}